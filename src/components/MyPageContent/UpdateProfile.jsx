import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { axiosPostFormData, axiosPut, axiosGet } from '@/features/axios';
import TableBox from '../Table/TableBox';
import CtaDefault from '@/components/Buttons/CtaDefault/CtaDefault';
import UserInformationInput from '@/components/SignInput/UserInformationInput';
import { AddImg } from '../../../public/images';

export default function UpdateProfile() {
  const fileInputRef = useRef(null);
  const [myInfo, setMyInfo] = useState({
    email: '',
    nickname: '',
    profileImageUrl: AddImg,
  });
  const [nextNickname, setNextNickname] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.log('파일 선택 안함');
        // 사진 없애는건 못하나..?
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const res = await axiosPostFormData('users/me/image', formData);

      if (!res.status) {
        try {
          const nextProfileImageUrl = await res.profileImageUrl;
          const updatedMyInfo = await axiosPut('users/me', {
            nickname: nextNickname,
            profileImageUrl: nextProfileImageUrl,
          });

          if (!updatedMyInfo.status) {
            setMyInfo((prev) => ({
              ...prev,
              nickname: nextNickname,
              profileImageUrl: nextProfileImageUrl,
            }));
          }
        } catch (e) {
          console.log('업데이트 실패');
        }
      }
    } catch (error) {
      console.error('이미지를 업로드하는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const { email, nickname, profileImageUrl } =
          await axiosGet('/users/me');
        setMyInfo({
          email,
          nickname,
          profileImageUrl,
        });
        setNextNickname(nickname);
      } catch (e) {
        console.error('나의 정보를 가져오지 못했습니다.: ', e);
      }
    };
    getMyInfo();
  }, []);
  return (
    <TableBox>
      <div className="relative flex flex-col gap-4 md:gap-6">
        <div className="mb-2">프로필</div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <div
              className="relative overflow-hidden flex justify-center items-center w-[100px] h-[100px] md:w-[182px] md:h-[182px] rounded-[6px] bg-[#F5F5F5] cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              {selectedFile ? (
                <Image
                  fill
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                />
              ) : (
                <Image fill src={myInfo.profileImageUrl} alt="add" />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/* // TODO: 이메일 클릭했을 때 테두리 없애기 */}
            <UserInformationInput
              labelName="이메일"
              placeholder={myInfo.email}
              readOnly
            />
            <UserInformationInput
              labelName="닉네임"
              value={nextNickname}
              onChange={(e) => setNextNickname(e.target.value)}
            />
          </div>
        </div>

        <div className="relative flex justify-end">
          <CtaDefault onClick={handleUpload} size="xsmall">
            저장
          </CtaDefault>
        </div>
      </div>
    </TableBox>
  );
}