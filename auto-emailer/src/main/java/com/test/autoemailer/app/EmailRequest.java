package com.test.autoemailer.app;

import lombok.Data;

// Helps with getters and setters
@Data
public class EmailRequest {
    private String emailContent;
    private String tone;

}
