import Image from 'next/image';
import day from '@/utils/day';
import { Inner } from '@/components/layout';

export default function Page() {
  const yebokDay = day('2022-06-02');
  const age = day().diff(yebokDay.subtract(1, 'year'), 'year');

  return (
    <Inner className="py-2 pb-10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          className="object-cover object-center"
          src="/images/about/main.jpg"
          alt="예복"
          fill
        />
        <div className="absolute h-full w-full bg-gradient-to-t from-black/50 to-transparent to-15%" />
        <h2 className="absolute bottom-2 left-4 text-center text-xl font-bold text-white">
          안녕하세요, 저는 예복이에요 😺
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p>
          나이는 <strong>{age}살</strong>, 태어난 날은 정확히 알 수 없지만{' '}
          <strong>{yebokDay.format('YY년 M월 D일')}</strong>
          , 제가 엄마와 언니들의 가족이 된 그 날을 생일로 삼고 있어요.
          <br />
          그날 이후 제 인생은 폭신한 이불과 맛있는 간식, 따뜻한 손길로 가득했죠.
        </p>
        <p>
          몸무게는 <strong>5kg</strong>, 몸에 딱 맞는 균형 잡힌 무게감이라, 걸을 때마다 기품이
          흐른다는 평을 듣곤 해요.
          <br />
          저는 사랑을 표현하는 걸 아끼지 않아요. 가족이 앉아 있으면 슬며시 옆에 자리를 잡거나,
          발끝에 조용히 몸을 기대기도 하죠.
        </p>
        <p>
          성격은 <strong>도도하고 품위 있지만, 사람을 정말 좋아하는 수다쟁이</strong>예요. 낯선
          사람도 그리 어려워하지 않고, 상황 파악만 끝나면 바로 옆에서 말을 걸기 시작해요.
          &#34;야옹&#34;부터 &#34;엄....망~!&#34;까지, 대화에 참여하는 걸 좋아하는 편이죠.
        </p>
        <div>
          <p>하루 일과는 고요하면서도 내면은 꽤 활발해요.</p>
          <ul className="my-2 rounded-lg border-[1px] border-stone-300 bg-white p-4 text-sm">
            <li>☀️ 아침엔 햇살 받으며 스트레칭 + 엄마와 언니 깨우기 모닝토크</li>
            <li>🌳 오후엔 창가에서 지나가는 새 구경하기</li>
            <li>🌙 밤엔 엄마 옆에서 엄마를 바라보며 잠들기</li>
          </ul>
        </div>
        <p>
          저는 쇼를 하거나 요란한 행동을 하진 않지만(🙀), 그 대신 말로 감정을 잘 전하는 고양이에요.
          <br />
          말수는 많고, 감정도 풍부하고, 무엇보다 목소리가 예뻐요. (스스로 말하기 민망하지만,
          사실입니다.)
        </p>
        <p>만나서 반가워요. 앞으로 자주 놀러오세요. 🌿</p>
      </div>
    </Inner>
  );
}
