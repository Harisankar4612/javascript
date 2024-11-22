let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
console.log("Initial Playlist:", playlist);

playlist.push("Song 6");
console.log("After Adding a New Song:", playlist);

playlist.splice(2, 1); 
console.log("After Removing a Song:", playlist);

console.log("Length of Playlist:", playlist.length);

console.log("First Song:", playlist[0]);
console.log("Last Song:", playlist[playlist.length - 1]);

const playlistString = playlist.join(", ");
console.log("Playlist as a Single String:", playlistString);

const newSongs = ["Song 7", "Song 8", "Song 9"];
playlist = playlist.concat(newSongs);
console.log("After Concatenating with New Songs:", playlist);

const nestedPlaylist = [playlist, ["Song 10", "Song 11"]];
const flattenedPlaylist = nestedPlaylist.flat();
console.log("Flattened Playlist:", flattenedPlaylist);

flattenedPlaylist.splice(2, 2, "Song 12", "Song 13");
console.log("After Replacing 2 Songs:", flattenedPlaylist);

const sortedPlaylist = [...flattenedPlaylist].sort();
console.log("Alphabetically Sorted Playlist:", sortedPlaylist);

const firstTwoSongs = flattenedPlaylist.slice(0, 2);
flattenedPlaylist.push(...firstTwoSongs);
console.log("After Copying First 2 Songs to the End:", flattenedPlaylist);
