// Every fleet and depot photo the business has supplied, in display order.
// Each photo ships twice from src/assets/gallery: `<slug>-900.webp` for the wall, `<slug>-1800.webp` for the lightbox.
// Sizes are the pixel dimensions of those two files, so the wall reserves the right space before images load.

const files = import.meta.glob<string>('./assets/gallery/*.webp', { eager: true, import: 'default' })
const url = (slug: string, edge: 900 | 1800) => files[`./assets/gallery/${slug}-${edge}.webp`]

export type GalleryTag = 'Fleet' | 'Depot' | 'On site'

export type GalleryPhoto = {
  slug: string
  alt: string
  tag: GalleryTag
  src: string
  large: string
  /** srcset for the wall: both files with their real widths */
  srcSet: string
  width: number
  height: number
}

// [slug, alt, tag, small w×h, large w×h]
const raw: [string, string, GalleryTag, [number, number], [number, number]][] = [
  ['tanker-sunset-tanks', 'Bulk diesel tanker beside the depot tanks at sunset', 'Fleet', [900, 675], [1800, 1350]],
  ['bakkie-sunset-depot', 'Liveried service bakkie at the depot at sunset', 'Fleet', [900, 675], [1800, 1350]],
  ['tank-farm-pumps', 'Bunded tank farm with two dispensing pumps', 'Depot', [900, 675], [1800, 1350]],
  ['tanker-harbour-vessel', 'Tanker with hose reel refuelling alongside a vessel in the harbour', 'On site', [900, 675], [1800, 1350]],
  ['bowser-trailer-hose-reel', 'M&A Diesel bowser trailer with its hose reel', 'Fleet', [675, 900], [1350, 1800]],
  ['tanker-mountains', 'Bulk tanker parked with the mountains behind', 'Fleet', [900, 506], [1280, 720]],
  ['rigid-tanker-gantry', 'Rigid tanker under the loading gantry at the depot', 'Depot', [900, 675], [1800, 1350]],
  ['bulk-filling-point', 'Bulk filling point for retail and trade customers', 'Depot', [675, 900], [1350, 1800]],
  ['bakkie-container-handler', 'Service bakkie refuelling a container handler on site', 'On site', [900, 675], [1800, 1350]],
  ['tanker-dusk-tanks', 'Tanker beside the storage tanks at dusk', 'Fleet', [900, 675], [1800, 1350]],
  ['labelled-diesel-tank', 'Labelled diesel storage tanks at the depot', 'Depot', [900, 675], [1800, 1350]],
  ['bowser-trailer-drilling-rig', 'Bakkie and bowser trailer refuelling a drilling rig on a farm road', 'On site', [900, 675], [1800, 1350]],
  ['bakkie-backhoe-loader', 'Plant refuelling bakkie with a backhoe loader behind', 'On site', [900, 675], [1600, 1200]],
  ['pump-depot-tanks', 'Diesel pump in front of the depot tanks', 'Depot', [675, 900], [1350, 1800]],
  ['tanker-depot', 'M&A Diesel bulk tanker at the depot', 'Fleet', [900, 506], [1280, 720]],
  ['loading-gantry', 'Loading gantry walkway between the depot tanks', 'Depot', [675, 900], [1350, 1800]],
  ['rigid-tanker-driver', 'Rigid tanker and driver out on a delivery', 'On site', [900, 506], [1800, 1013]],
  ['three-tanks-sky', 'Three vertical storage tanks against a blue sky', 'Depot', [675, 900], [1350, 1800]],
  ['bakkie-generator', 'Bakkie and trailer refilling a containerised generator', 'On site', [675, 900], [1350, 1800]],
  ['tanker-industrial-yard', 'Bulk tanker in an industrial yard', 'Fleet', [900, 675], [1800, 1350]],
  ['labelled-tank-pump', 'Labelled diesel tank and pump in the bund', 'Depot', [675, 900], [1350, 1800]],
  ['tanker-loading-tank', 'Tanker loading beside a storage tank', 'Depot', [675, 900], [1350, 1800]],
  ['tanker-depot-cone', 'Bulk tanker parked at the depot', 'Fleet', [900, 675], [1600, 1200]],
  ['tanks-low-angle', 'Storage tanks seen from below', 'Depot', [675, 900], [1350, 1800]],
  ['bunded-tanks-control-box', 'Bunded storage tanks and the pump control box', 'Depot', [675, 900], [1350, 1800]],
  ['tanks-dispensing-hose', 'Storage tanks with a dispensing hose', 'Depot', [675, 900], [1350, 1800]],
]

export const galleryPhotos: GalleryPhoto[] = raw.map(([slug, alt, tag, [width, height], [largeWidth]]) => ({
  slug,
  alt,
  tag,
  src: url(slug, 900),
  large: url(slug, 1800),
  srcSet: `${url(slug, 900)} ${width}w, ${url(slug, 1800)} ${largeWidth}w`,
  width,
  height,
}))
