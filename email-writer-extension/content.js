console.log("Email Writer Extension Loaded");


function createAiButton()
{
    const button = document.createElement("div");
    button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3"

    button.style.marginRight = "8px";
    button.innerHTML = "AI-Reply";
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI reply');

    return button;
    
}

function findComposeToolbar() 
{
    const selectors = [
        '.btC',
        '.aDh',
        '[role="toolbar"]',
        '.gU.Up'
    ]

    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
    }
    return null;
}


function getEmailContent() {
        const selectors = [
        '.h7',
        '.a3s.aiL',
        '[role="presentation"]',
        '.gmail_quote'
    ]

    for (const selector of selectors) {
        const emailBody = document.querySelector(selector);
        if (emailBody) {
            return emailBody.innerText.trim();
        }
    }
    return "";

}

function injectButton() {
    const existingButton = document.querySelector(".auto-emailer-button");
    if (existingButton) {
        existingButton.remove();
    }

    const toolbar = findComposeToolbar();

    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }


    const button = createAiButton();
    
    button.innerText = "AI-Reply";
    button.classList.add("auto-emailer-button");

    button.addEventListener("click",async () => {
        try {
            button.innerText = "Generating...";
            button.disabled = true;

            const emailContent = getEmailContent(); 

            const response = await fetch("https://akurtles2-auto-emailer.chickenkiller.com/api/email/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },  
                body: JSON.stringify({ "emailContent": emailContent, "tone": "professional" })
            });

            if(!response.ok)
            {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const generatedReply = await response.text();

            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');
            if (composeBox){
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }
            else{
                console.error("Compose box not found");
            }
        } catch (error) {
            console.error("Error generating AI reply:", error);
            alert("Failed to generate AI reply.")
        }
        finally {
            button.innerText = "AI-Reply";
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
    
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(
            node=> node.nodeType === Node.ELEMENT_NODE && (node.matches('.aDh,.btC,[role="dialog"]') || node.querySelector('.aDh,.btC,[role="dialog"]'))
        );

        if(hasComposeElements){
            console.log("Compose window detected");
            setTimeout(injectButton, 2000);
        }
    }
});


observer.observe(document.body, { childList: true, subtree: true });