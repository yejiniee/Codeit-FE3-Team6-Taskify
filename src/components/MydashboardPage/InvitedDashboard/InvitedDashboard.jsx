import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { NoMailIcon, SearchIcon } from '@/../public/images';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import CtaDefault from '../../common/Buttons/CtaDefault/CtaDefault';
import useDebounce from '@/hooks/useDebounce';
import { axiosGet, axiosPut } from '@/features/axios';
import { removeInvitations } from '@/features/invitationsDashboardListSlice';
import { addSidebarDashboard } from '@/features/sidebarDashboardListSlice';
import { addDashboard } from '@/features/dashboardListSlice';

// 송상훈 TODO :
export default function InvitedDashboard({ fetchMore, loading, updateTitle }) {
  const observerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchTerm = useDebounce(inputValue, 700);

  const dispatch = useDispatch();

  const invitations = useSelector(
    (state) => state.invitationsDashboardList.invitations,
  );

  const isEmpty = !invitations || invitations.length === 0;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      updateTitle(inputValue);
    } else {
      updateTitle(inputValue);
    }
  }, [debouncedSearchTerm]);

  useIntersectionObserver(observerRef, scrollContainerRef, () => {
    if (!loading) {
      fetchMore();
    }
  });

  const handleAcceptClick = async (invitationId) => {
    try {
      const body = {
        inviteAccepted: true,
      };
      const response = await axiosPut(
        `https://sp-taskify-api.vercel.app/3-6/invitations/${invitationId}`,
        body,
      );
      const data = await axiosGet(`/dashboards/${response.dashboard.id}`);
      dispatch(addDashboard(data));
      dispatch(addSidebarDashboard(data));
      dispatch(removeInvitations(response));
    } catch (error) {
      // eslint-disable-next-line no-alert
      // alert('다시 시도해주세요.');
    }
  };

  const handleRejectClick = async (invitationId) => {
    try {
      const body = {
        inviteAccepted: false,
      };
      const response = await axiosPut(
        `https://sp-taskify-api.vercel.app/3-6/invitations/${invitationId}`,
        body,
      );
      dispatch(removeInvitations(response));
    } catch (error) {
      // eslint-disable-next-line no-alert
      // alert('다시 시도해주세요.');
    }
  };

  return (
    <section className="bg-white max-w-[1022px] h-auto rounded-[8px] shadow-md py-[24px] px-[16px]">
      <h2 className="text-xl font-bold mb-5 ">초대받은 대시보드</h2>

      <div className="flex items-center mb-[24px]">
        <div className="relative w-full ">
          <input
            className="w-full rounded-[6px] border-[1.3px] shadow-sm h-[40px] pl-10"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image src={SearchIcon} width={24} height={24} alt="돋보기아이콘" />
          </div>
        </div>
      </div>

      <div className="hidden md:text-gray_9FA6B2 md:grid md:grid-cols-3 ">
        <p>이름</p>
        <p>초대자</p>
        <p>수락 여부</p>
      </div>

      {isEmpty ? (
        <div className="h-[400px] flex flex-col justify-center items-center">
          <Image
            src={NoMailIcon}
            width={100}
            height={100}
            alt="대시보드 없음"
          />
          <p className="text-gray_9FA6B2 mt-6">
            아직 초대받은 대시보드가 없어요
          </p>
        </div>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-y-2 h-[400px] overflow-y-scroll rounded-[8px]"
        >
          {invitations.map((invitation) => (
            <div
              key={invitation.id}
              className="flex flex-col border-b pb-[20px] gap-y-2 md:flex-row md:items-center md:grid md:grid-cols-3 md:pt-[20px] "
            >
              <div className="flex">
                <p className="w-[60px] text-gray_9FA6B2 md:hidden lg:hidden">
                  이름
                </p>
                <span>{invitation.dashboard.title}</span>
              </div>
              <div className="flex">
                <p className="w-[60px] text-gray_9FA6B2 md:hidden lg:hidden">
                  초대자
                </p>
                <span>{invitation.inviter.nickname}</span>
              </div>
              <div className="flex gap-x-3">
                <CtaDefault
                  size="small"
                  onClick={() => handleAcceptClick(invitation.id)}
                >
                  수락
                </CtaDefault>
                <CtaDefault
                  size="small"
                  color="white"
                  onClick={() => handleRejectClick(invitation.id)}
                >
                  거절
                </CtaDefault>
              </div>
              <div ref={observerRef} className="h-[1px]" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
