import React from "react";
import { Text, View, StatusBar, Image, ScrollView } from "react-native";
import AppHeader from "../components/app-header";
import SettingComponent from "../components/setting-component";

import { styles } from "./styles/user-account-screen.styles";

const UserAccountScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={"My Profile"}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/image/avatar.png")}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Shane Wilson</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent
          icon="setting"
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <SettingComponent
          icon="dollar"
          heading="Offers & Refferrals"
          subheading="Offer"
          subtitle="Refferrals"
        />
        <SettingComponent
          icon="info"
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
    </ScrollView>
  );
};

export default UserAccountScreen;
