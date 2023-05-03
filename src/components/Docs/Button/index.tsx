import { Container, Button, Box } from '../../'

export default function ButtonPage() {
  return (
    <Container.Root>
      <Container className='flex flex-col gap-y-5'>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button size='xl'>경쟁사편성</Button>
          <Button size='lg'>외부채널 편성</Button>
          <Button className='gap-x-1'>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.641 10.168h-4.57c-.409 0-.715.311-.715.73 0 .414.306.726.714.726h1.392v4.995c0 .58.333.934.886.934.553 0 .891-.354.891-.934v-4.995h1.402c.408 0 .71-.312.71-.726 0-.419-.302-.73-.71-.73ZM16.587 10.98c.172-.623.435-.877.908-.877.51 0 .87.318.87.784 0 .178-.06.452-.14.705l-1.584 4.71c-.285.88-.715 1.252-1.483 1.252-.778 0-1.224-.377-1.504-1.252l-1.584-4.71a2.332 2.332 0 0 1-.14-.688c0-.473.366-.8.876-.8.456 0 .752.285.929.876l1.402 4.618h.08l1.37-4.619Z'
                fill='currentColor'
              ></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
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
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M17 9.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.528 1.282l4.191 4.43A.746.746 0 0 0 12 15c.24 0 .45-.114.587-.289l4.192-4.429A.749.749 0 0 0 17 9.75Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button size='sm'>편성정보 조회</Button>
          <Button size='xs'>초기화</Button>
        </Box>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button variant='outline' size='xl'>
            프로그램 전체
          </Button>
          <Button variant='outline' size='lg'>
            CATV
          </Button>
          <Button variant='outline'>MC/PC</Button>
          <Button variant='outline' size='sm'>
            시청가구
          </Button>
          <Button variant='outline' size='xs'>
            주문콜
          </Button>
        </Box>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button variant='ghost' size='xl'>
            순주문
          </Button>
          <Button variant='ghost' size='lg'>
            작성/수정
          </Button>
          <Button variant='ghost'>프로그램 선택하기</Button>
          <Button variant='ghost' size='sm'>
            검색
          </Button>
          <Button variant='ghost' size='xs'>
            SR
          </Button>
        </Box>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button.Group>
            <Button>상품평</Button>
            <Button>내 방송 기준(한달)</Button>
          </Button.Group>
        </Box>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button.Group>
            <Button variant='outline'>닫기</Button>
            <Button variant='outline'>확인</Button>
            <Button variant='outline'>테스트</Button>
          </Button.Group>
        </Box>
        <Box className='flex items-center mb-2 gap-x-2' padding rounded border shadow>
          <Button.Group>
            <Button variant='ghost'>
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.5 10c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5A6.508 6.508 0 0 1 3.5 10Zm18.207 10.293L16.315 14.9A7.957 7.957 0 0 0 18 10a8 8 0 1 0-8 8 7.96 7.96 0 0 0 4.9-1.685l5.393 5.392a1 1 0 1 0 1.414-1.414Z'
                  fill='currentColor'
                ></path>
              </svg>
            </Button>
          </Button.Group>
        </Box>
      </Container>
    </Container.Root>
  )
}
