import Section from "./Section";
import { motion } from "framer-motion";


function Architecture() {
    return (
        <Section id="architecture" className="py-20 bg-zinc-950 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold">Architecture</h2>
                    <p className="mt-3 text-zinc-400">
                        The application is built using React for the frontend and Spring Boot for the backend, ensuring a robust and scalable solution.
                    </p>
                </div>
            </div>
        </Section>
    );
}

export default Architecture;