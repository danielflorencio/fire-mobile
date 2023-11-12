import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import WelcomeMessage from "./components/WelcomeMessage/Index";
import BalanceInfo from "../../../../components/BalanceInfo";
import PreviewCard from "./components/PreviewCard/Index";
import GraphicSection from "./components/GraphicSection/Index";
import { styles } from "./styles";

export default function InitialPage(){
    
    const router = useRouter();

    return(
      <ScrollView>
      <View style={styles.container}>
        <WelcomeMessage/>
        <BalanceInfo/>
        <View style={styles.separator}  />      
        <Text style={styles.previewsSectionTitle}>Your previewed finances</Text>
        <View style={styles.moveCardsLeftContainer}>
          <PreviewCard previewCardTitle='In 1 Month ' infoToFetch='next-month'/>
          <PreviewCard previewCardTitle='In 6 Months ' infoToFetch='six-months'/>
          <PreviewCard previewCardTitle='In 1 Year ' infoToFetch='one-year'/>
        </View>
        <View style={styles.separator} />
        <GraphicSection/>
      </View>
      </ScrollView>
    )
}