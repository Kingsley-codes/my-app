import SafeAreaView from "@/components/SafeAreaView";
import useSocialAuth from "@/hooks/useSocialAuth";
import { OAUTH } from "@/utils/constants";
import { Image, Pressable, Text, View } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export default function SignInPage() {
  const { loadingStrategy, handleSocialAuth } = useSocialAuth();

  const isGoogleClicked = loadingStrategy === OAUTH.GOOGLE_OAUTH;
  const isAppleClicked = loadingStrategy === OAUTH.OAUTH_APPLE;

  const loading = isGoogleClicked || isAppleClicked;

  return (
    <SafeAreaView className="bg-magnolia dark:bg-cinder flex-1" edges={["top"]}>
      <View className="px-6 pt-12">
        <Text
          className="text-center text-5xl font-extrabold tracking-tight 
        text-gun-powder dark:text-athens-gray uppercase font-mono"
        >
          SpendWise
        </Text>

        <Text className="mt-1 text-center text-[14px] text-ebony dark:text-gray-suit">
          Sign in to access your curated financial dashboard
        </Text>

        <View className="flex items-center justify-center mt-28">
          <Image source={require("@/assets/images/wallet.webp")} />
        </View>
      </View>

      <View className="dark:bg-gray-suit/10 bg-white flex-1 rounded-t-[36px] px-6 pb-8 pt-10 mt-20">
        <View className="self-center rounded-full dark:bg-secondary bg-magnolia/10 py-1 px-3">
          <Text className="text-xs font-semibold uppercase tracking-[1px] dark:text-athens-gray text-gun-powder">
            Welcome Back
          </Text>
        </View>

        <Text className="mt-2 text-center text-sm leading-6 dark:text-white/80 text-gray-500">
          Select a sign-in option below to continue and securely access your
          account
        </Text>

        <View className="mt-6">
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border
          dark:border border-gray-300 px-4 active:opacity-90 
          ${loading ? "opacity-70" : ""}`}
            disabled={loading}
            onPress={() => handleSocialAuth("oauth_google")}
          >
            <View className="w-8 h-8 items-center justify-center rounded-full bg-white">
              <Image
                source={require("@/assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold dark:text-white">
              {isGoogleClicked
                ? "Signing in with Google..."
                : "Continue with Google"}
            </Text>

            <FontAwesome name="arrow-right" size={18} color="#4B5563" />
          </Pressable>

          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border
          dark:border border-gray-300 px-4 active:opacity-90 dark:bg-white/95
          bg-cinder ${loading ? "opacity-70" : ""}`}
            disabled={loading}
            onPress={() => handleSocialAuth("oauth_apple")}
          >
            <View className="w-8 h-8 items-center justify-center rounded-full bg-white">
              <FontAwesome6 name="apple" size={20} color="#111" />
            </View>

            <Text
              className="ml-3 flex-1 text-lg font-semibold dark:text-black 
            text-gray-100"
            >
              {isAppleClicked
                ? "Signing in with Apple..."
                : "Continue with Apple"}
            </Text>

            <FontAwesome name="arrow-right" size={18} color="#4B5563" />
          </Pressable>
        </View>

        <Text
          className="mt-3 text-center text-sm leading-5 dark:text-white/50
        text-gray-500"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}
