import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <View className="w-full max-w-sm rounded-3xl border border-emerald-400/30 bg-slate-900 p-6">
        <Text className="text-center text-xs font-semibold uppercase tracking-[3px] text-emerald-400">
          NativeWind Test
        </Text>
        <Text className="mt-3 text-center text-3xl font-bold text-white">
          If this looks styled, it works.
        </Text>
        <Text className="mt-3 text-center text-base leading-6 text-slate-300">
          You should see a dark background, rounded card, green accent text, and
          padded spacing from Tailwind classes.
        </Text>

        <View className="mt-6 flex-row justify-center gap-3">
          <View className="rounded-full bg-emerald-400 px-4 py-2">
            <Text className="font-semibold text-slate-950">bg-emerald-400</Text>
          </View>
          <View className="rounded-full border border-slate-600 px-4 py-2">
            <Text className="font-semibold text-slate-700">rounded-full</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
