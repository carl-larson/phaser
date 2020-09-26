class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene) {
        var x = scene.player.x;
        var y = scene.player.y - 16;
        super(scene, x, y, "laserbolts");
        scene.add.existing(this);

        this.play("fire");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

        scene.projectiles.add(this);
    }
    update() {
        if (this.y < 16) {
            this.destroy();
        }
    }
}