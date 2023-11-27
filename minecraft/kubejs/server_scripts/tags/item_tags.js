// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Item Tag Additions for Valhelsia 6.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @see item_tags_remove.js
 * @copyright Valhelsia Inc 2023
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // ----- Valhelsia Tags -----
  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    // 'immersiveengineering:wirecoil_structure_rope', // Async0x42: disabled
    'supplementaries:rope',
  ]);

  event.add('valhelsia:ash', [
    'supplementaries:ash',
    //'darkerdepths:ash',
  ]);

  event.add('valhelsia:rose_quartz', [
    'biomesoplenty:rose_quartz_shard',
    //'cave_enhancements:rose_quartz',
    'create:rose_quartz',
  ]);
  
  event.add('valhelsia:electron_tubes', [
    'create:electron_tube',
    // 'immersiveengineering:electron_tube', // Async0x42: disabled
  ]);
  
  event.add('valhelsia:cheese', [
    // 'ad_astra:cheese', // Async0x42: disabled
    //'brewinandchewin:flaxen_cheese_wedge',
  ]);

  // ----- Ores -----
  event.add('forge:ores', [
    //'darkerdepths:aridrock_silver_ore',
    //'darkerdepths:limestone_silver_ore',
  ]);

  event.add('forge:ores/silver', [
    //'darkerdepths:aridrock_silver_ore',
    //'darkerdepths:limestone_silver_ore',
  ]);

  // ----- Ingots -----
  event.add('forge:ingots', [
    //'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/silica_steel', [
    //'moreminecarts:silica_steel',
  ]);

  // ----- Storage Blocks -----
  event.add('forge:storage_blocks', [
    //'moreminecarts:silica_steel_block',
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    //'moreminecarts:silica_steel_block',
  ]);

  // ----- Dusts -----
  event.add('forge:dusts', [
    //'botania:pixie_dust',
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/pixie', [
    //'botania:pixie_dust',
  ]);

  event.add('forge:dusts/warp', [
    'waystones:warp_dust',
  ]);

  event.add('forge:flour/wheat', [
    // 'pneumaticcraft:wheat_flour', // Async0x42: disabled
  ]);

  // ----- Logs / Wood -----
  event.add('forge:stripped_logs', [
    // 'forbidden_arcanus:stripped_aurum_log', // Async0x42: disabled
    //'upgrade_aquatic:stripped_driftwood_log',
  ]);

  event.add('forge:stripped_wood', [
    // 'forbidden_arcanus:stripped_aurum_wood', // Async0x42: disabled
    //'upgrade_aquatic:stripped_driftwood',
  ]);

  event.add('minecraft:logs_that_burn', [
    // 'forbidden_arcanus:aurum_log', // Async0x42: disabled
    // 'forbidden_arcanus:stripped_aurum_log', // Async0x42: disabled
  ]);

   
  // ----- Sandstone -----
  event.add('forge:sandstone/colorless', [
    //'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    //'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    //'atmospheric:arid_sandstone',
    //'atmospheric:smooth_arid_sandstone',
    //'atmospheric:cut_arid_sandstone',
    //'atmospheric:chiseled_arid_sandstone',
    //'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    //'atmospheric:red_arid_sandstone',
    //'atmospheric:smooth_red_arid_sandstone',
    //'atmospheric:cut_red_arid_sandstone',
    //'atmospheric:chiseled_red_arid_sandstone',
    //'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    //'quark:soul_sandstone',
    //'quark:soul_sandstone_bricks',
    //'quark:smooth_soul_sandstone',
    //'quark:cut_soul_sandstone',
    //'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    // 'forbidden_arcanus:soulless_sandstone', // Async0x42: disabled
    // 'forbidden_arcanus:cut_soulless_sandstone', // Async0x42: disabled
    // 'forbidden_arcanus:polished_soulless_sandstone', // Async0x42: disabled
  ]);

  // Create Slice & Dice
  event.add('sliceanddice:allowed_tools', [
    //'galosphere_delight:silver_kitchen_hammer',
  ]);
});