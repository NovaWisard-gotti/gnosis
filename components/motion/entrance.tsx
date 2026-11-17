import { rise } from './timing'

/**
 * Título que entra palabra por palabra con CSS (`animate-rise`): se ve sin esperar a JavaScript
 * y termina en menos de un segundo. Para lectores de pantalla sigue siendo un único encabezado.
 */
export function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="animate-rise inline-block" style={rise(delay + i * 35)}>{word}</span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  )
}
