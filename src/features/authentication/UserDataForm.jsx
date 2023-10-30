import { useParams } from "react-router-dom";
import { useUser } from "./useUser";
import FormRow from "../../ui/FormRow";
import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import InputFile from "../../ui/InputFile";

function UserDataForm() {
    const { userId } = useParams();
    const {
        user: { email },
    } = useUser();

    const [newUsername, setNewUsername] = useState(userId);
    const [newAvatar, setNewAvatar] = useState(null);

    const { updateUser, isUpdating } = useUpdateUser();

    function handleSubmit(e) {
        e.preventDefault();

        if (!newUsername) {
            return toast.error("Username must be provided");
        }

        updateUser({ username: newUsername, avatar: newAvatar });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Email address">
                <Input value={email} disabled />
            </FormRow>
            <FormRow label="Username">
                <Input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    disabled={isUpdating}
                />
            </FormRow>

            <FormRow label="Avatar">
                <InputFile
                    type="file"
                    disabled={isUpdating}
                    onChange={(e) => setNewAvatar(e.target.files[0])}
                />
            </FormRow>

            <FormRow>
                <Button
                    $size="large"
                    $variation="primary"
                    disabled={isUpdating}
                >
                    Update
                </Button>
            </FormRow>
        </Form>
    );
}

export default UserDataForm;
