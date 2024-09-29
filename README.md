
# 🌟 StackUp Community Q&A Bot

Welcome to the **StackUp Community Q&A Bot**! This bot is designed to assist users in navigating the StackUp community by providing quick answers to frequently asked questions (FAQs) and handling more complex queries using the powerful **Gemini AI API**. The bot integrates seamlessly into Discord and offers both slash commands and traditional message-based interactions.

## 🚀 Features

- **Instant Answers to FAQs**: The bot comes preloaded with a comprehensive set of FAQs related to StackUp, ensuring users get quick and accurate answers.
- **AI-Powered Query Handling**: For questions that go beyond the predefined FAQs, the bot leverages the Gemini AI API to deliver insightful responses.
- **Slash Command Integration**: Users can interact with the bot using the `/ask` slash command, making it easy and intuitive to get the information they need.
- **Real-Time Updates**: The bot registers slash commands dynamically upon startup, ensuring that new commands and updates are immediately available to users.

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **Discord Developer Portal**: Create a Discord bot via the [Discord Developer Portal](https://discord.com/developers/applications) and obtain your bot token.
- **Gemini AI API Key**: Sign up for Gemini AI and obtain an API key.
- **ZENDESK_SUBDOMAIN**: The subdomain of the Zendesk Help Center (e.g., `stackuphelpcentre`).
- **ZENDESK_API_TOKEN**: The API token for authenticating Zendesk API requests.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nitrajsinh-Solanki/stackup-discord-bot.git
   cd stackup-discord-bot
   ```

2. **Install the necessary dependencies**:
   ```bash
   npm install axios discord.js dotenv
   ```

3. **Set up your environment variables** by creating a `.env` file in the root directory and adding the following:
   ```plaintext
   DISCORD_TOKEN=your-discord-bot-token
   GEMINI_API_KEY=your-gemini-ai-api-key
   GUILD_ID=your-guild-id
   ZENDESK_SUBDOMAIN=stackuphelpcentre  
   ZENDESK_API_TOKEN=your_zendesk_api_token
   ```

4. **Run the bot**:
   ```bash
   node index.js
   ```

## 💬 Usage

The StackUp Community Q&A Bot is designed to be intuitive and easy to use within your Discord server. Below are the different ways you can interact with the bot:

### 1. Slash Commands

The bot supports the `/ask` slash command, which allows users to ask questions related to the StackUp community. This command provides a structured and user-friendly way to interact with the bot.

### 2. Traditional Command

You can also use the traditional command format:
```plaintext
!ask What is the deadline for submissions?
```
## 🔗 API Integration

The **StackUp Community Q&A Bot** is enhanced with powerful API integrations to provide dynamic, real-time answers and advanced query handling:

- **Gemini AI API**: The bot utilizes the Gemini AI API to handle complex questions that go beyond the predefined FAQs. It processes natural language queries, providing insightful and relevant responses, making the bot more than just a static FAQ tool.
  
- **Zendesk API**: The bot integrates with Zendesk to retrieve articles and support information from the StackUp Help Center, ensuring that users get up-to-date answers for support-related queries.

Both API integrations allow the bot to respond to a wide range of inquiries, offering a combination of preloaded FAQs and real-time AI-driven answers.

## 🔐 Environment Variables

To configure the **StackUp Community Q&A Bot** with the necessary API keys and tokens, you'll need to create a `.env` file in the root directory of your project. This file will store the environment variables required for the bot to function properly.

### Required Environment Variables:

- `DISCORD_TOKEN`: Your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).
- `GEMINI_API_KEY`: API key for the Gemini AI service, used for handling advanced queries.
- `GUILD_ID`: The ID of your Discord server (guild) where the bot will operate.
- `ZENDESK_SUBDOMAIN`: The subdomain of the Zendesk Help Center (e.g., `stackuphelpcentre`).
- `ZENDESK_API_TOKEN`: The API token for authenticating Zendesk API requests.

### Example `.env` File:

```plaintext
DISCORD_TOKEN=your-discord-bot-token
GEMINI_API_KEY=your-gemini-ai-api-key
GUILD_ID=your-guild-id
ZENDESK_SUBDOMAIN=stackuphelpcentre
ZENDESK_API_TOKEN=your-zendesk-api-token

```
## 🙏 Acknowledgments

The development of the **StackUp Community Q&A Bot** was made possible through the contributions and support of various individuals, communities, and technologies.

- **Discord.js Community**: Thank you to the developers of [Discord.js](https://discord.js.org/), whose library made it easy to interact with Discord’s API and build a feature-rich bot.
- **Gemini AI**: We’re grateful to the team behind [Gemini AI](https://gemini-ai.com/) for their advanced AI platform that powers the bot's complex query handling, enhancing the user experience.
- **StackUp Community**: Special thanks to the StackUp community for fostering a supportive environment that inspired the creation of this bot.
- **Open-Source Contributors**: We also appreciate the open-source tools like Node.js, `dotenv`, and `axios` that allowed us to build and deploy the bot with ease.
- **Testers and Users**: Lastly, thank you to the testers and early users who provided valuable feedback, helping us refine and improve the bot’s functionality.
```
