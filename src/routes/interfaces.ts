import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PropsStackRoutes = {
    Result: {
        distance: number;
        liters: number;
    }
    Home: undefined
}

export type PropsScreensApp<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>