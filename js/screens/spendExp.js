game.SpendExp = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10);

        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                this.font = new me.Font("Arial", 35, "red");

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Press F1-F4 to buy, and F5 to skip", this.pos.x, this.pos.y);
                this.font.draw(renderer.getContext(), "CURRENT EXP:", this.pos.x, this.pos.y);
            }

        })));

    },
    onDestroyEvent: function() {

    }
});