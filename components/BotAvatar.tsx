import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="size-12 rounded-full">
      <AvatarImage
        className="p-1"
        src="https://www.tailframes.com/images/avatar.webp"
      />
    </Avatar>
  );
};
