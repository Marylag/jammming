# Jammming

Jammming is a web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify accounts.

## Features

- **Search**: Search the Spotify library for tracks by keyword.
- **Custom Playlist**: Create custom playlists by adding tracks from search results.
- **Save to Spotify**: Save custom playlists to your Spotify account for later access.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Spotify API**: Used for searching tracks and managing playlists.
- **Surge**: Used for deploying the application to a live server.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a Spotify developer account and obtain API credentials.
4. Create a `.env` file in the project root directory and add your Spotify API credentials:

```
REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
REACT_APP_SPOTIFY_REDIRECT_URI=your-redirect-uri
```

5. Run the application using `npm start`.
6. Access the application at `http://localhost:3000` in your web browser.

## Deployment

To deploy the application to a live server, you can use Surge or any other hosting service of your choice.

1. Install Surge globally using `npm install -g surge`.
2. Build the application using `npm run build`.
3. Deploy the build directory to Surge using `surge`.

```
surge ./build your-domain.surge.sh
```


4. Access your deployed application at `your-domain.surge.sh`.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
