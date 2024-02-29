let accessToken;
const clientID = "107ca0974bc14d24904049924b94abd8";
const redirectUrl = "http://localhost:3000";

const Spotify = {
    getAccessToken() {
        // First check for the access token
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        //Second check for the access token
        if (tokenInURL && expiryTime) {
            // setting access token and expiry time variables
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            // setting the function which will reset the access token when it expires
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

            // clearing the url after the access token expires
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        // Third check for the access token if the first and second check are both false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse) {
                    console.error("Response error");
                }
                return jsonResponse.tracks.items.map((t) => ({
                    id: t.id,
                    name: t.name,
                    artist: t.artists[0].name,
                    album: t.album.name,
                    uri: t.uri,
                }));
            });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) return;
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
            .then((response) => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id;
                let playlistId;

                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({ name: name }),
                })
                    .then((response) => response.json())
                    .then((jsonResponse) => {
                        playlistId = jsonResponse.id;
                        return fetch(
                            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`, 
                            {
                            headers: header,
                            method: "post",
                            body: JSON.stringify({ uris: trackUris}),
                        }
                    );
                });
            });
    },
};

export { Spotify };