// priority: 100
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Worldgen changes for Valhelsia 6.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Worldgen Removal Event Handler
 */
WorldgenEvents.remove(event => {

  event.removeOres(props => {
    props.blocks = 
      [
      // Async0x42: disabled galosphere
      // 'galosphere:silver_ore',
      // 'galosphere:deepslate_silver_ore',
      // Async0x42: disabled embers
      // 'embers:lead_ore',
      // 'embers:deepslate_lead_ore',
      // 'embers:silver_ore',
      // 'embers:deepslate_silver_ore'
    ]
  })
})