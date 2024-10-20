
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const doctors = [
  {
    id: '1',
    name: 'Dr. John Smith',
    specialty: 'Dermatologist',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Dr. Anna Dinn',
    specialty: 'Psychologist',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Dr. Angela Rayez',
    specialty: 'Therapist',
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Dr. Chris Bronte',
    specialty: 'Dentist',
    rating: 5.0,
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDoctor = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <View style={styles.rating}>
          <Icon name="star" size={14} color="#FFFF00" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar with White Background and Light Purple Text/Icon */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#E6E6FA" style={styles.searchIconLeft} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search conditions, doctors..."
          placeholderTextColor="#000000"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Let’s find your doctor</Text>

      {/* Doctor List */}
      <FlatList
        data={filteredDoctors}
        renderItem={renderDoctor}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA", // Light purple background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background for search bar
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Light purple border
  },
  searchIconLeft: {
    marginRight: 10, // Space between the icon and the text input
  },
  searchBar: {
    flex: 1, // Text input takes up remaining space
    fontSize: 14,
    color: '#A99DFF', // Light purple text for input
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333333', // Dark text color for heading
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for each doctor card
    borderRadius: 15, // Rounded corners for the card
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 10,
    alignItems: 'center',
    elevation: 3, // Shadow effect on Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular avatar
    backgroundColor: '#D3C2F7', // Light purple avatar background
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 24,
    color: '#FFF', // White text in avatar
    fontWeight: 'bold',
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Dark text for doctor name
    textAlign: 'center',
  },
  specialty: {
    fontSize: 14,
    color: '#666666', // Light gray text for specialty
    marginTop: 5,
    textAlign: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5C47F0', // Purple background for rating
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10, // Rounded rating container
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#FFF', // White text for rating
    marginLeft: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ensures spacing between columns
  },
});

export default App;