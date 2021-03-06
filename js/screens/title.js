game.TitleScreen = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10);
        
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [270, 240, 300, 50]);
                this.font = new me.Font("Arial", 46, "red");

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Start a New Game", this.pos.x, this.pos.y);
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            
            update: function(){
                return true;
            },
            
            newGame: function(){
                me.input.releasePointerEvent('pointerdown', this);
                me.save.remove("exp");
                me.save.remove("exp1");
                me.save.remove("exp2");
                me.save.remove("exp3");
                me.save.remove("exp4");
                me.state.change(me.state.PLAY);
            }

        })));
        
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [380, 440, 250, 50]);
                this.font = new me.Font("Arial", 46, "red")

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Continue", this.pos.x, this.pos.y);
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            
            update: function(dt){
                return true;
            },
            
            newGame: function(){
                game.data.exp = me.save.exp;
                game.data.exp1 = me.save.exp1;
                game.data.exp2 = me.save.exp2;
                game.data.exp3 = me.save.exp3;
                game.data.exp4 = me.save.exp4;
                me.input.releasePointerEvent('pointerdown', this);
                me.state.change(me.state.SPENDEXP);
            }

        })));
        
    },

    onDestroyEvent: function() {
        
    }
});