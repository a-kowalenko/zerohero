import supabase from "./supabase";

export async function createPlayer(user) {
    const {
        id: user_id,
        user_metadata: { avatar, username: name },
    } = user;

    const { data, error } = await supabase
        .from("player")
        .insert({
            user_id,
            name,
            avatar,
        })
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function updatePlayerByUserId({ username, avatar, userId }) {
    console.log("updatePlayerByUserId", username, avatar, userId);
    const { data, error } = await supabase
        .from("player")
        .update({ name: username, avatar })
        .eq("user_id", userId)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    console.log("updatedPlayer:", data);

    return data;
}
