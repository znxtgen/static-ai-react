import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import GeminiImage from './images/gemini.png';
import ChatGPTImage from './images/chatgpt.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                            title="Alexa"
                            handle="@alexa99"
                            image={AlexaImage}
                            alt="Alexa Logo"
                            description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                            title="Gemini"
                            handle="@gemini89"
                            image={GeminiImage}
                            alt="Gemini Logo"
                            description="Gemini was made by Google. It helps you manage your G-products."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                            title="ChatGPT"
                            handle="@gpt6"
                            image={ChatGPTImage}
                            alt="ChatGPT Logo"
                            description="ChatGPT was made by OpenAI and has a few new features up its sleeves."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;