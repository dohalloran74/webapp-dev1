"use strict";
import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import accounts from './accounts.js';
// EXERCISE 3:import userStore from "../models/user-store.js"; -- this is not needed in the stats controller as we want to be able to read in the user data to display in stats 

import userStore from "../models/user-store.js";

const stats = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if (loggedInUser) {
      logger.info("Stats page loading!");

      // app statistics calculations
      const playlists = playlistStore.getAllPlaylists();

      let numPlaylists = playlists.length;

      let numSongs = playlists.reduce((total, playlist) => total + playlist.songs.length, 0);

      let average = numPlaylists > 0 ? (numSongs / numPlaylists).toFixed(2) : 0;

      let totalRating = playlists.reduce((total, playlist) => total + parseInt(playlist.rating), 0);

      let avgRating = numPlaylists > 0 ? totalRating / numPlaylists : 0;

      let maxRating = playlists.length > 0 ? Math.max(...playlists.map(playlist => playlist.rating)) : 0;
      let maxRated = playlists.filter(playlist => playlist.rating === maxRating);
      let favTitles = maxRated.map(item => item.title);

      let longestSize = playlists.length > 0 ? Math.max(...playlists.map(playlist => playlist.songs.length)) : 0;
      let longestPlaylists = playlists.filter(playlist => playlist.songs.length === longestSize);
      let longestPlaylistTitles = longestPlaylists.map(item => item.title);

      // EXERCISE 3: Get user data for statistics
      const users = userStore.getAllUsers();
      //EXERCISE 3 : const numUsers = users.length; -- this is not needed in the stats controller as we are not displaying the number of users in the stats page, but I have left it here in case we want to add it in the future.
      const numUsers = users.length;
      
      const statistics = {
        displayNumPlaylists: numPlaylists,
        displayNumSongs: numSongs,
        displayAverage: average,
        displayAvgRating: avgRating,
        highest: maxRating,
        displayFav: favTitles,
        longest: longestSize,
        longestTitles: longestPlaylistTitles,
        displayNumUsers: numUsers, // EXERCISE 3: add number of users to the statistics object
      };

      const viewData = {
        title: "Playlist App Statistics",
        stats: statistics,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName
      };

      response.render("stats", viewData);
    }
    else response.redirect('/');
  },

};

export default stats;
