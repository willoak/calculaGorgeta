import React, {useState, useEffect} from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background: #e3e3e3;
  flex:1;
  align-items: center;
  padding-top: 20px;
`;
const HeaderText = styled.Text`
  font-size: 25px;
  text-transform: uppercase;
`;
const Input = styled.TextInput`
  width: 90%;
  padding: 10px;
  height: 50px;
  background: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const Btn = styled.Button`
  color: red;
  margin-top: 20px;
`;
const PctArea = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;
const PctItem = styled.Button`
  margin: 42px 4px;
  flex: 1;
  font-size: 30px;
`;

export default () => {
  const [bill, setBill] = useState('');
  const [gorgeta, setGorgeta] = useState(0);
  const [pct, setPct] = useState(10);

  const calcularGorjeta = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setGorgeta((nBill * pct) / 100);
    } else {
      alert('Favor digitar');
    }
  }

  useEffect(() => {
    calcularGorjeta();
  },[pct]);

  return (
      <Page>
        <HeaderText>Calculadora de Gorjeta</HeaderText>
        <Input 
          placeholder="Quanto deu a conta?" 
          keyboardType="numeric" 
          value={bill}
          onChangeText={n=>setBill(n)}
        ></Input>
        <Text>Qual porcentagem gostaria de dar?</Text>
        <PctArea>
          <PctItem title="5%" onPress={() => setPct(5)}></PctItem>
          <PctItem title="10%" onPress={() => setPct(10)}></PctItem>
          <PctItem title="15%" onPress={() => setPct(15)}></PctItem>
          <PctItem title="20%" onPress={() => setPct(20)}></PctItem>
        </PctArea>
        <Btn color="orange" title={`Calcular gorgeta (${pct}%)`} onPress={calcularGorjeta} />
          {gorgeta > 0 && 
          <Page>
            <Text>Valor da conta: R$ {parseFloat(bill).toFixed(2)}</Text>
            <Text>Gorgeta: R$ {parseFloat(gorgeta).toFixed(2)} ({pct}%)</Text>
            <Text>Total: R$ {(parseFloat(bill) + parseFloat(gorgeta)).toFixed(2)}</Text>
          </Page>
        }
      </Page>
  );
}

