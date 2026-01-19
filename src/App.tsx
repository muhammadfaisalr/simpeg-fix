import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Box,
  Chip,
  Container,
  CssBaseline,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { useMemo, useState } from 'react'
import { PEGAWAI, type PegawaiRow } from './data/pegawai'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

const columns: GridColDef<PegawaiRow>[] = [
  {
    field: 'no',
    headerName: 'No',
    width: 90,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    valueGetter: (_value, _row, _column, apiRef) => {
      const index = apiRef.current.getRowIndexRelativeToVisibleRows(_row.id)
      return index >= 0 ? index + 1 : ''
    },
  },
  {
    field: 'nama',
    headerName: 'Nama',
    flex: 1,
    minWidth: 220,
  },
  {
    field: 'nip',
    headerName: 'NIP',
    width: 190,
  },
  {
    field: 'jabatan',
    headerName: 'Nama Jabatan',
    flex: 1,
    minWidth: 320,
  },
  {
    field: 'pangkatGol',
    headerName: 'Pangkat/Gol',
    width: 220,
  },
  {
    field: 'unitKerja',
    headerName: 'Unit Kerja',
    flex: 1,
    minWidth: 220,
  },
]

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[\u2019']/g, "'")
    .trim()
}

export default function App() {
  const [query, setQuery] = useState('')

  const filteredRows = useMemo(() => {
    const q = normalizeSearch(query)
    if (!q) return PEGAWAI

    return PEGAWAI.filter((row) => {
      const haystack = normalizeSearch(
        `${row.nama} ${row.nip} ${row.jabatan} ${row.pangkatGol}`,
      )
      return haystack.includes(q)
    })
  }, [query])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar position="sticky" color="default" elevation={0}>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Data Pegawai BKSDA Kalimantan Timur
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                  Daftar Pegawai
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cari berdasarkan nama, NIP, jabatan, pangkat/gol, atau nomor.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Data terakhir diperbarui: <b>19 Januari 2026</b>
                </Typography>            
              </Box>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
              >
                <Chip
                  size="small"
                  variant="outlined"
                  label={`${filteredRows.length} / ${PEGAWAI.length}`}
                />
                <TextField
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  size="small"
                  sx={{ width: { xs: '100%', sm: 360 } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>

            <Box sx={{ width: '100%', overflowX: 'auto' }}>
              <Box sx={{ minWidth: 900 }}>
                <DataGrid
                  rows={filteredRows}
                  columns={columns}
                  disableRowSelectionOnClick
                  density="compact"
                  autoHeight
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 25 },
                    },
                  }}
                  pageSizeOptions={[10, 25, 50, 100]}
                  sx={{
                    borderRadius: 2,
                    '& .MuiDataGrid-columnHeaders': {
                      bgcolor: 'action.hover',
                    },
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
