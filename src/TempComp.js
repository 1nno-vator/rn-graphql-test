import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

const GET_DATA = gql`
  query {
    continents {
      code
      name
    }
  }
`;

const TempComp = () => {
  const {data, loading} = useQuery(GET_DATA);

  const renderFunction = ({item}) => {
    return (
      <View>
        <Text>
          {item.name} ({item.code})
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data?.continents}
        renderItem={renderFunction}
        keyExtractor={({item}) => String(item?.code)}
      />
    </SafeAreaView>
  );
};

export default TempComp;
