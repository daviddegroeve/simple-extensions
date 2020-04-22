namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
d d d d . . . . . . d d d d d d 
d d d d d d . . . d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(
            hex`140008000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b00000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b00000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02010b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02030b0b0b0b0b0b0b0b0b0b0b0b0b0b0b06060602000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0203`,
            img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`,
            [myTiles.tile0,sprites.castle.tilePath4,sprites.dungeon.chestOpen,sprites.builtin.coral0,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath8,sprites.builtin.forestTiles12,myTiles.tile1,sprites.builtin.oceanDepths3,sprites.dungeon.floorLight0,sprites.builtin.forestTiles10],
            TileScale.Sixteen
        ))
let myCorg = corgio.create(SpriteKind.Player, 10, 70)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
