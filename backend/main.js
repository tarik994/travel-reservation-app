const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const {destination,destinationID,saveDestination, deleteDestination, updateDestination} = require('./controller/destination-controller');
const {getUserById, saveUser, loginUser, deleteUser, getUserInfo} = require('./controller/user-controller');
const {searchDestination} = require('./controller/search-controller');
const {saveHotel, hotelByDest, addHotelToDest,getAllHotels, deleteHotel} = require('./controller/hotel-controller');
const {deleteReservation,getReservationForUser,makeReservation} = require('./controller/reservation-controller');
const { addFavorite, favoritesDestination, deleteFavorite } = require('./controller/favorite-controller');


app.get('/getUserById',getUserById);
app.get(`/getUserInfo/:id`,getUserInfo)
app.get(`/getDestination/search/:searchDestination`,searchDestination);
app.post('/saveDestination/saveDest',saveDestination);
app.delete('/getDestination/deleteDest/:id',deleteDestination);
app.delete('/getDestination/deleteReservation/:id',deleteReservation);
app.get(`/getReservation/:id`,getReservationForUser);
app.get(`/getDestination/:id`,destinationID);
app.post('/reservation',makeReservation);
app.post('/registration', saveUser);
app.post('/login',loginUser);
app.put('/updateDestination',updateDestination);
app.get('/getDestination',destination);
app.get(`/hotels/:id`, hotelByDest);
app.get('/hotels',getAllHotels);
app.post(`/saveHotel`,saveHotel);
app.post('/addHotelToDest', addHotelToDest);
app.post(`/favoriteDestination`,addFavorite);
app.get(`/favoriteUserDest/:id`,favoritesDestination)
app.delete('/deleteFavoriteDestination/:id',deleteFavorite);
app.delete(`/deleteUser/:id`,deleteUser)
app.delete(`/deleteHotel/:id`,deleteHotel)



app.listen(PORT,function(){
    console.log(`Uspjesno povezano na PORT ${PORT}`)
})