import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../components/Card';

export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {results.map((result) => (
        <Card key={result.email} {...result} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
