'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type Selection = { selected: string | null; select: (slug: string) => void }

const ProgramSelectionContext = createContext<Selection>({ selected: null, select: () => {} })

/**
 * Programa elegido en /despertar-al-ser. Lo fijan la lista (al abrir un programa o llegar con
 * `#slug`) y el contacto, que lo usa para precargar el mensaje de WhatsApp y el asunto del correo.
 */
export function ProgramSelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null)
  return <ProgramSelectionContext.Provider value={{ selected, select: setSelected }}>{children}</ProgramSelectionContext.Provider>
}

export const useProgramSelection = () => useContext(ProgramSelectionContext)
