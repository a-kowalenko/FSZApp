// app/(tabs)/index.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
import NewsItem from '@/components/NewsItem';

interface News {
  id: string;
  title: string;
  description: string;
}

const mockNewsData: News[] = [
  { id: '1', title: 'News 1', description: 'Description 1' },
  { id: '2', title: 'News 2', description: 'Description 2' },
  { id: '3', title: 'News 3', description: 'Description 3' },
  { id: '4', title: 'News 4', description: 'Description 4' },
  { id: '5', title: 'News 5', description: 'Description 5' },
  { id: '6', title: 'News 6', description: 'Description 6' },
  // ... more news items
];

export default function TabOneScreen() {
  const [news, setNews] = useState<News[]>([]);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [page, setPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<string>('default');
  const [filterOptio-+n, setFilterOption] = useState<string>('all');

  useEffect(() => {
    // Load news data (mocking for this example)
    setNews(mockNewsData);
    setFilteredNews(mockNewsData.slice(0, 5));
  }, []);

  useEffect(() => {
    filterAndSortNews();
  }, [page, sortOption, filterOption]);

  const filterAndSortNews = () => {
    let updatedNews = [...news];

    // Filter logic here
    if (filterOption !== 'all') {
      updatedNews = updatedNews.filter(news => news.title.includes(filterOption));
    }

    // Sort logic here
    if (sortOption === 'title') {
      updatedNews.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Pagination
    const start = (page - 1) * 5;
    const end = start + 5;
    setFilteredNews(updatedNews.slice(start, end));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Feed</Text>

      <FlatList
        data={news4*}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsItem title={item.title} description={item.description} />}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 200,
    marginVertical: 20,
  },
});
