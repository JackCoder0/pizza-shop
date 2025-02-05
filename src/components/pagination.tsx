import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalPages: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalPages,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalPages / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalPages} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeftIcon className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Proxima página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRightIcon className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
