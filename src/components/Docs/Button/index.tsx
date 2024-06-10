import * as React from 'react'
import { Container, Button, Box } from '../../'

export default function ButtonPage() {
  const [a, setA] = React.useState(false)
  const handleClick = React.useCallback(() => {
    setA(!a)
  }, [a])
  return (
    <Container.Root>
      <Container className='flex flex-col gap-y-5'>
        <div id='solid'>
          <h3 className='text-base font-bold'>Solid</h3>
          <p className='font-mono text-xs opacity-50'>variants="solid"</p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button size='large' primary={a}>
            경쟁사편성
          </Button>
          <Button size='default'>외부채널 편성</Button>
          <Button size='small'>편성정보 조회</Button>
          <Button size='mini'>초기화</Button>
          <Button size='mini' anchor href='/'>
            홈으로 이동
          </Button>
        </Box>
        <div id='outline'>
          <h3 className='top-10 text-base font-bold'>Outline</h3>
          <p className='font-mono text-xs opacity-50'>variants="outline"</p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button
            variant='outline'
            size='large'
            primary={a}
            onClick={handleClick}
          >
            프로그램 전체
          </Button>
          <Button variant='outline' size='default'>
            CATV
          </Button>
          <Button variant='outline'>MC/PC</Button>
          <Button variant='outline' size='small' badge>
            시청가구
          </Button>
          <Button variant='outline' size='mini'>
            주문콜
          </Button>
        </Box>
        <div id='ghost'>
          <h3 className='top-10 text-base font-bold'>Ghost</h3>
          <p className='font-mono text-xs opacity-50'>variants="ghost"</p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button variant='ghost' size='large' primary>
            순주문
          </Button>
          <Button variant='ghost' size='default'>
            작성/수정
          </Button>
          <Button variant='ghost'>프로그램 선택하기</Button>
          <Button variant='ghost' size='small'>
            검색
          </Button>
          <Button variant='ghost' size='mini'>
            SR
          </Button>
        </Box>
        <div id='solid'>
          <h3 className='text-base font-bold'>Solid with icon</h3>
          <p className='font-mono text-xs opacity-50'>variants="solid"</p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button primary>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.641 10.168h-4.57c-.409 0-.715.311-.715.73 0 .414.306.726.714.726h1.392v4.995c0 .58.333.934.886.934.553 0 .891-.354.891-.934v-4.995h1.402c.408 0 .71-.312.71-.726 0-.419-.302-.73-.71-.73ZM16.587 10.98c.172-.623.435-.877.908-.877.51 0 .87.318.87.784 0 .178-.06.452-.14.705l-1.584 4.71c-.285.88-.715 1.252-1.483 1.252-.778 0-1.224-.377-1.504-1.252l-1.584-4.71a2.332 2.332 0 0 1-.14-.688c0-.473.366-.8.876-.8.456 0 .752.285.929.876l1.402 4.618h.08l1.37-4.619Z'
                fill='currentColor'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20 6h-5.94l1.72-1.72a.751.751 0 0 0-1.06-1.06l-2.732 2.732L9.28 3.245a.75.75 0 0 0-1.062 1.06L9.915 6H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1.5 12c0 .827-.673 1.5-1.5 1.5H4c-.827 0-1.5-.673-1.5-1.5V9c0-.827.673-1.5 1.5-1.5h16c.827 0 1.5.673 1.5 1.5v9Z'
                fill='currentColor'
              ></path>
            </svg>
            <span>동일 ITEM 방송</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='flex-none transition-all'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 9.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.528 1.282l4.191 4.43A.746.746 0 0 0 12 15c.24 0 .45-.114.587-.289l4.192-4.429A.749.749 0 0 0 17 9.75Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button size='small'>
            <span>편성정보 조회</span>
            <svg
              className='size-5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 9.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.528 1.282l4.191 4.43A.746.746 0 0 0 12 15c.24 0 .45-.114.587-.289l4.192-4.429A.749.749 0 0 0 17 9.75Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button size='mini'>
            <svg
              className='size-3'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.25 8.25H9.75V3.75C9.75 3.336 9.414 3 9 3C8.586 3 8.25 3.336 8.25 3.75V8.25H3.75C3.336 8.25 3 8.586 3 9C3 9.414 3.336 9.75 3.75 9.75H8.25V14.25C8.25 14.664 8.586 15 9 15C9.414 15 9.75 14.664 9.75 14.25V9.75H14.25C14.664 9.75 15 9.414 15 9C15 8.586 14.664 8.25 14.25 8.25Z'
                fill='currentColor'
              />
            </svg>
            <span>초기화</span>
            <svg
              className='size-3'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.25 8.25H9.75V3.75C9.75 3.336 9.414 3 9 3C8.586 3 8.25 3.336 8.25 3.75V8.25H3.75C3.336 8.25 3 8.586 3 9C3 9.414 3.336 9.75 3.75 9.75H8.25V14.25C8.25 14.664 8.586 15 9 15C9.414 15 9.75 14.664 9.75 14.25V9.75H14.25C14.664 9.75 15 9.414 15 9C15 8.586 14.664 8.25 14.25 8.25Z'
                fill='currentColor'
              />
            </svg>
          </Button>
        </Box>
        <div id='group-outline'>
          <h3 className='top-10 text-base font-bold'>Outline + circle</h3>
          <p className='font-mono text-xs opacity-50'>
            variants="outline" circle
          </p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button variant='outline' size='default' primary circle>
            내 방송 기준
          </Button>
          <Button variant='outline' circle>
            확인
          </Button>
          <Button variant='outline' size='mini' circle>
            테스트
          </Button>
        </Box>
        <div id='ghost-icon-only'>
          <h3 className='top-10 text-base font-bold'>Ghost + link</h3>
          <p className='font-mono text-xs opacity-50'>variants="ghost" link</p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button variant='ghost' primary link size='large'>
            내 방송 기준
          </Button>
          <Button variant='ghost' link>
            확인
          </Button>
          <Button variant='ghost' link size='mini'>
            테스트
          </Button>
        </Box>
        <div id='ghost-icon-only'>
          <h3 className='top-10 text-base font-bold'>Ghost + icon + circle</h3>
          <p className='font-mono text-xs opacity-50'>
            variants="ghost" icon circle
          </p>
        </div>
        <Box
          className='mb-2 flex items-center gap-x-2'
          padding
          rounded
          border
          shadow
        >
          <Button variant='ghost' primary icon circle size='large'>
            <svg
              className='size-6'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 10c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5A6.508 6.508 0 0 1 3.5 10Zm18.207 10.293L16.315 14.9A7.957 7.957 0 0 0 18 10a8 8 0 1 0-8 8 7.96 7.96 0 0 0 4.9-1.685l5.393 5.392a1 1 0 1 0 1.414-1.414Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button variant='ghost' circle icon>
            <svg
              className='size-4'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 10c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5A6.508 6.508 0 0 1 3.5 10Zm18.207 10.293L16.315 14.9A7.957 7.957 0 0 0 18 10a8 8 0 1 0-8 8 7.96 7.96 0 0 0 4.9-1.685l5.393 5.392a1 1 0 1 0 1.414-1.414Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button variant='ghost' icon circle size='mini'>
            <svg
              className='size-3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 10c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5A6.508 6.508 0 0 1 3.5 10Zm18.207 10.293L16.315 14.9A7.957 7.957 0 0 0 18 10a8 8 0 1 0-8 8 7.96 7.96 0 0 0 4.9-1.685l5.393 5.392a1 1 0 1 0 1.414-1.414Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
        </Box>
      </Container>
    </Container.Root>
  )
}
