# Mention User Feature

This is a simple React application that allows users to mention other users by typing their username with an `@` symbol. The mentioned users are displayed as clickable links below the input field, and multiple users can be mentioned in a single comment. This functionality is useful for tagging users in a comment or message system.

## Features

- **Mention Users**: Type `@` to see a dropdown of usernames and select a user to mention.
- **Multiple Mentions**: You can mention multiple users in a single comment.
- **Profile Links**: Each mentioned user appears as a clickable link, which redirects to the user's profile.
- **Input Reset**: After mentioning a user and clicking the "Mention User" button, the input is cleared for new mentions.

## How to Use

1. **Start Typing**: In the input field, start typing a username with the `@` symbol (e.g., `@john`).
2. **Select a Username**: Once you type `@`, a dropdown of suggested usernames will appear. Select the desired user.
3. **Click "Mention User"**: After selecting a user, click the "Mention User" button to add the mention to your comment.
4. **Multiple Mentions**: You can repeat the process to mention more users. Each mentioned user will appear as a clickable link below the button.

## Installation

To get started with this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/FarheenMalak/Comments-Mention-Feature.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Comments-Mention-Feature
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the app:
    ```bash
    npm start
    ```

This will start the development server, and you can view the app at `http://localhost:3000`.

## Technologies Used

- **React**: Frontend library used for building the app.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. We welcome contributions to improve functionality and UI/UX.

## License

This project is open-source and available under the [MIT License](LICENSE).

