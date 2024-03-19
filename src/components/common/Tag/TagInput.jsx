import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import TagItem from './TagItem';

export default function TagInput({ initialTag, setFormValues }) {
  // TODO(조예진): 태그가 1개 이상 있을 땐 placeholder 없애기

  const inputRef = useRef(null);
  const [tagList, setTagList] = useState([]);
  const [tagItem, setTagItem] = useState('');

  useEffect(() => {
    if (initialTag && initialTag.length > 0) {
      // 초기 태그가 있으면 태그 리스트에 설정
      setTagList(initialTag);
    }
  }, [initialTag]);

  const addTagItem = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      tags: updatedTagList,
    }));

    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      addTagItem();
    }
  };

  const deleteTagItem = (tagToDelete) => {
    const filteredTagList = tagList.filter((tag) => tag !== tagToDelete);
    setTagList(filteredTagList);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      tags: filteredTagList,
    }));

    inputRef.current.focus();
  };

  return (
    <div className="sign-input-base">
      <div className="flex gap-[6px] ">
        {/* flex-wrap */}
        {tagList &&
          tagList
            .filter((tag) => tag.trim() !== '')
            .map((tag, index) => {
              return (
                <TagItem
                  key={index}
                  tag={tag}
                  onDelete={() => deleteTagItem(tag)}
                />
              );
            })}
        <input
          ref={inputRef}
          type="text"
          placeholder="입력 후 Enter"
          className="flex w-full bg-transparent focus:border-0 focus:outline-none cursor-text"
          value={tagItem}
          onChange={(e) => setTagItem(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}
