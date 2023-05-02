import cx from 'classnames'

/**
 * 페이지 로딩 인디케이터 컨테이너
 */
type SpinnerProps = { isFull?: boolean }
export function Spinner({ isFull }: React.HTMLProps<HTMLDivElement> & SpinnerProps) {
  const className = cx({
    main: isFull,
    grow: !isFull,
    'flex-centered': true,
  })
  return <div className={className}>로딩중...</div>
}
