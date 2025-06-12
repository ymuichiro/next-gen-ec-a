"use client";

import { LoaderIcon } from "@/components/icons";
import { MessageActions } from "@/components/message-actions";
import { PreviewAttachment } from "@/components/preview-attachment";
import { cn } from "@/lib/utils";
import type { UseChatHelpers } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import cx from "classnames";
import equal from "fast-deep-equal";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import { Markdown } from "./markdown";

const PurePreviewMessage = ({
  message,
  isLoading,
  isReadonly,
}: {
  message: UIMessage;
  isLoading: boolean;
  setMessages: UseChatHelpers["setMessages"];
  reload: UseChatHelpers["reload"];
  isReadonly: boolean;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        data-testid={`message-${message.role}`}
        className="w-full mx-auto max-w-6xl px-3 sm:px-4 group/message"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}
      >
        <div
          className={cn(
            "flex gap-4 w-full group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-4xl",
            {
              "w-full": true, // 常にviewモード
            }
          )}
        >
          <div className="flex flex-col gap-4 w-full">
            {message.experimental_attachments && (
              <div data-testid="message-attachments" className="flex flex-row justify-end gap-2">
                {message.experimental_attachments.map((attachment) => (
                  <PreviewAttachment key={attachment.url} attachment={attachment} />
                ))}
              </div>
            )}

            {message.parts?.map((part, index) => {
              const { type } = part;
              const key = `message-${message.id}-part-${index}`;

              if (type === "text") {
                // 編集UIを削除し、常にviewモードのみ
                return (
                  <div key={key} className="flex flex-row gap-2 items-start">
                    {/* 編集ボタン削除 */}
                    <div
                      data-testid="message-content"
                      className={cn("flex flex-col gap-4", {
                        "bg-primary text-primary-foreground px-3 py-2 rounded-xl": message.role === "user",
                      })}
                    >
                      <Markdown>{part.text}</Markdown>
                    </div>
                  </div>
                );
              }
            })}

            {!isReadonly && <MessageActions key={`action-${message.id}`} message={message} isLoading={isLoading} />}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const PreviewMessage = memo(PurePreviewMessage, (prevProps, nextProps) => {
  if (prevProps.isLoading !== nextProps.isLoading) {
    return false;
  }
  if (prevProps.message.id !== nextProps.message.id) {
    return false;
  }
  if (!equal(prevProps.message.parts, nextProps.message.parts)) {
    return false;
  }

  return true;
});

export const ThinkingMessage = () => {
  const role = "assistant";

  return (
    <motion.div
      data-testid="message-assistant-loading"
      className="w-full mx-auto max-w-6xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      data-role={role}
    >
      <div
        className={cx("flex gap-4 w-full rounded-xl", {
          "group-data-[role=user]/message:bg-muted": true,
        })}
      >
        <div className="flex flex-col gap-3 w-full py-2">
          <div className="flex flex-col items-start w-full">
            <motion.div
              className="flex items-center gap-3 px-4 py-3 bg-secondary/30 rounded-xl w-full max-w-md"
              animate={{
                boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 8px rgba(125,125,255,0.1)", "0 0 0 rgba(0,0,0,0)"],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <LoaderIcon size={18} />
              </motion.div>

              <div className="flex-1 flex flex-col gap-2">
                <div className="animate-pulse rounded-md h-3 bg-muted-foreground/20 w-3/5" />
                <div className="animate-pulse rounded-md h-3 bg-muted-foreground/20 w-4/5" />
              </div>
            </motion.div>
          </div>

          <div className="pl-2 pt-1">
            <div className="animate-pulse rounded-md h-3 bg-muted-foreground/15 w-1/3 mb-2" />
            <div className="animate-pulse rounded-md h-3 bg-muted-foreground/15 w-2/3 mb-2" />
            <div className="animate-pulse rounded-md h-3 bg-muted-foreground/15 w-1/2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
