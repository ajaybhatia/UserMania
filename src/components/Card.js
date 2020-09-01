import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({picture, name, location, email}) {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: picture.medium,
          }}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.name}>
            {name.title} {name.first} {name.last}
          </Text>
        </View>
        <View>
          <Text style={styles.note}>{email}</Text>
        </View>
        <View>
          <Text>
            {location.city}, {location.state}, {location.country}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.icon}>{'\u203A'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d5e5f5',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    color: '#777',
  },
  icon: {
    fontSize: 32,
  },
});
