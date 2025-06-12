import { PreviewMessage } from "@/components/message";
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import type { UseChatHelpers } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import equal from "fast-deep-equal";
import { memo } from "react";

interface MessagesProps {
  status: UseChatHelpers["status"];
  messages: Array<UIMessage>;
  setMessages: UseChatHelpers["setMessages"];
  reload: UseChatHelpers["reload"];
  isReadonly: boolean;
  isArtifactVisible: boolean;
}

function PureMessages({ status, messages, setMessages, reload, isReadonly }: MessagesProps) {
  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>();

  return (
    <div
      ref={messagesContainerRef}
      className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll overflow-x-hidden hidden-scrollbar pt-4"
    >
      {messages.map((message, index) => (
        <PreviewMessage
          key={message.id}
          message={message}
          isLoading={status === "streaming" && messages.length - 1 === index}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
        />
      ))}

      <div ref={messagesEndRef} className="shrink-0 min-w-[24px] min-h-[24px]" />
    </div>
  );
}

export const Messages = memo(PureMessages, (prevProps, nextProps) => {
  // アーティファクト表示状態が両方trueなら再レンダリング不要
  if (prevProps.isArtifactVisible && nextProps.isArtifactVisible) {
    return true;
  }

  // ステータスが異なる場合は再レンダリング
  if (prevProps.status !== nextProps.status) {
    return false;
  }
  // 両方truthyなら再レンダリング不要
  if (prevProps.status && nextProps.status) {
    return true;
  }
  // メッセージ数が異なる場合は再レンダリング
  if (prevProps.messages.length !== nextProps.messages.length) {
    return false;
  }
  // メッセージ内容が異なる場合は再レンダリング
  if (!equal(prevProps.messages, nextProps.messages)) {
    return false;
  }

  return true;
});
