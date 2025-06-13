import type { Attachment } from "ai";
import { FileIcon, ImageIcon, LoaderIcon } from "./icons";

function getFileIcon({ contentType = "" }: { contentType?: string }) {
  // 画像
  if (contentType.startsWith("image/")) {
    return <ImageIcon />;
  }
  return <FileIcon />;
}

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  let name = "";
  if (isUploading) {
    name = attachment.name || "file";
  } else {
    name = attachment.name?.split("/")?.pop() ?? "";
  }

  return (
    <div data-testid="input-attachment-preview" className="flex flex-col gap-2">
      <div className="w-20 h-16 aspect-video bg-muted rounded-md relative flex flex-col items-center justify-center">
        {getFileIcon({ contentType: attachment.contentType })}
        {isUploading && (
          <div data-testid="input-attachment-loader" className="animate-spin absolute text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="text-xs text-zinc-500 max-w-16 truncate">{name}</div>
    </div>
  );
};
