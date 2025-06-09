'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { ActionButton } from './action-button';

export const ActionBar = () => {
  const [isLike, setIsLike] = useState(false);

  const handleToggleLike = () => {
    setIsLike((prev) => !prev);
  };

  const handleShare = () => {
    // TODO URL 설정
    navigator.clipboard.writeText('url').catch((error) => console.error(error));
    toast('클립보드에 복사되었습니다!');
  };

  const handleToggleCommentMode = () => {
    toast.error('아직 구현되지 않은 기능입니다.');
  };

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <ActionButton icon="heart" active={isLike} onClick={handleToggleLike} />
        <ActionButton icon="message-circle" onClick={handleToggleCommentMode} />
      </div>
      <ActionButton icon="share-2" onClick={handleShare} />
    </div>
  );
};
