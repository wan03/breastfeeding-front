import React, { useContext, createContext, useState, useEffect } from "react";
import { firestore } from "./firebase";
import agility from "@agility/content-fetch";

export const AgilityContext = createContext();

export const useAgility = () => {
  return useContext(AgilityContext);
};

export const AgilityProvider = ({ children }) => {
  const agility = useProvideAgility();
  return (
    <AgilityContext.Provider value={agility}>
      {children}
    </AgilityContext.Provider>
  );
};

function useProvideAgility() {
  const [agilityApi, setAgilityApi] = useState(null);

  const getConfigurationData = () => {
    firestore
    .collection("agility")
    .doc("config")
    .get()
    .then((res) => {
      if (res.exists) {
        let data = res.data();
        let config = {
          guid: data.guid,
          apiKey: data.liveAPIKey,
        };
        return config;
      } else console.log("Does not exist");
    })
    .catch((error) => console.log("Firestore error", error))
    .then((config) => setAgilityApi(agility.getApi(config)))
    .catch( error => {
      console.log("Agility Error", error);
    });
  }

  useEffect(() => {
    getConfigurationData();
  }, []);

  return agilityApi;
}
