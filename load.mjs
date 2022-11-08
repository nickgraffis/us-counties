import fs from 'fs'

function addSpaces(name) {
  let returnName = ''
  for (let i = 0; i < name.length; i++) {
    if (name[i].toUpperCase() === name[i]) returnName += ' ' + name[i]
    else returnName += name[i]
  }

  return returnName.trim()
}

const counties = []
let data = fs.readFileSync('./data.text', 'utf8')
data = data.replace(/\s/g, '')
  const table = 
  data.split('<table>')[1].split('</table>')[0]
  // Find the table body
  const tableBody = table.split('<tbody>')[1].split('</tbody>')[0]
  // Find the table rows
  const tableRows = tableBody.split('<tr>')
  // For each row get the td
  tableRows.forEach(row => {
    const tds = row.split('<td>').filter(Boolean)
    // Get the first td
    const FIPS = tds[0]
    // Get the second td
    const name = tds[1]
    // Get the third td
    const state = tds[2]
    console.log(FIPS, name, state)
    counties.push({
      FIPS: FIPS?.replace(/<\/tr>/g, '').replace(/<\/td>/g, ''),
      name: (() => {
        let nm = name?.replace(/<\/tr>/g, '').replace(/<\/td>/g, '')
        if (nm) return addSpaces(nm)
      })(),
      state: state?.replace(/<\/tr>/g, '').replace(/<\/td>/g, '')
    })
  })

fs.writeFileSync('./counties.json', JSON.stringify(counties))