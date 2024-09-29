require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Expanded FAQs
const faqs = {
    "Can I resubmit my submission?": "No, you can't resubmit the submission.",
    "Why am I only approved even if I joined before reaching the max. no of participants?": "Approval depends on several factors like verification and compliance.",
    "Which countries are not supported by StackUp?": "Currently, StackUp doesn't support countries under sanctions or with legal restrictions.",
    "What is the deadline for submissions?": "The deadline for submissions can vary per challenge. Please check the challenge page for the latest information.",
    "How can I contact StackUp support?": "You can contact StackUp support via the Help Center: https://stackuphelpcentre.zendesk.com/hc/en-us.",
    "What are the requirements for participating in StackUp events?": "Participation requirements include signing up on StackUp, complying with rules, and meeting eligibility criteria.",
    "Can I participate in multiple StackUp challenges?": "Yes, you can participate in multiple challenges unless specified otherwise.",
    "What happens if I miss the deadline?": "Late submissions are generally not accepted. Please ensure to submit before the deadline.",
    "How do I submit my project?": "You can submit your project through the official StackUp challenge portal under 'Submit Project'.",
    "What programming languages are allowed?": "You can use any programming language unless the challenge specifies otherwise.",
    "What is the maximum team size?": "The maximum team size is typically 4 members, but please verify for each specific challenge.",
    "Where can I find the official rules?": "The official rules can be found on the StackUp event page or the Discord rules section.",
    "How are winners chosen?": "Winners are chosen based on creativity, functionality, and code quality as per the challenge's judging criteria.",
    "Is there a code of conduct I need to follow?": "Yes, participants must adhere to the code of conduct outlined on the StackUp website.",
    "Are there any age restrictions for participants?": "Participants must be at least 18 years old unless otherwise specified.",
    "What should I do if I encounter a technical issue during the event?": "Report any technical issues to StackUp support via the Help Center.",
    "Can I change my submission after it's been made?": "Once submitted, changes are generally not allowed unless specified in the challenge rules.",
    "How can I keep track of upcoming challenges?": "You can keep track of upcoming challenges by following StackUp on social media and checking the website regularly.",
    "Will there be any prizes for winners?": "Yes, winners will receive prizes as mentioned in the challenge details.",
    "What types of projects are encouraged?": "Projects that showcase innovation, creativity, and practical applications are highly encouraged.",
    "Can I work with a team?": "Yes, team collaborations are encouraged unless specified otherwise.",
    "What is the format for submission?": "Submissions should follow the guidelines outlined in the challenge details, typically including documentation and source code.",
    "How will the judging process work?": "Judges will evaluate submissions based on criteria like originality, impact, and technical execution.",
    "Are there any prohibited activities during the event?": "Yes, activities that violate the code of conduct or local laws are strictly prohibited.",
    "Can I ask questions during the event?": "Yes, you can ask questions in designated channels or directly to support staff.",
    "What happens if my project is selected?": "If selected, you will be notified via the contact information provided during registration."
};

// Function to find an answer from FAQs
function findFAQAnswer(query) {
    const answer = faqs[query];
    return answer ? answer : null;
}

// Function to handle queries with Gemini AI API
async function getGeminiAIAnswer(query) {
    try {
        const response = await axios.post('https://api.gemini-ai.com/v1/ask', {
            question: query,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
            },
        });

        return response.data.answer || 'Sorry, I could not find an answer to that question.';
    } catch (error) {
        console.error('Error with Gemini AI:', error.message);
        return 'Sorry, there was an error processing your request.';
    }
}

// Function to handle queries
async function getStackUpAnswer(query) {
    // Check FAQs first
    const faqAnswer = findFAQAnswer(query);
    if (faqAnswer) {
        return faqAnswer;
    }

    // If not found, try Gemini AI
    return await getGeminiAIAnswer(query);
}

// Register Slash Commands for your guild
async function registerSlashCommands() {
    const { REST } = require('@discordjs/rest');
    const { Routes } = require('discord-api-types/v10');

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(client.user.id, process.env.GUILD_ID),
            {
                body: [
                    {
                        name: 'ask',
                        description: 'Ask a question related to StackUp',
                        options: [
                            {
                                name: 'question',
                                type: 3, // STRING type
                                description: 'The question you want to ask',
                                required: true,
                            },
                        ],
                    },
                ],
            }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error registering commands:', error.message);
    }
}

// Event handler for when the bot is ready
client.once('ready', () => {
    console.log('Bot is online and ready!');
    registerSlashCommands();  // Register slash commands when the bot is ready
});

// Handle slash command interactions
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'ask') {
        const query = options.getString('question');
        const response = await getStackUpAnswer(query);
        await interaction.reply(response);
    }
});

// Handle incoming messages for traditional !ask command
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!ask')) {
        const query = message.content.replace('!ask', '').trim();
        if (!query) {
            return message.reply('Please provide a question.');
        }

        const response = await getStackUpAnswer(query);
        message.reply(response);
    }
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN);
