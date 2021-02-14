class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by_id(params[:id])
        render json: user
    end

    def create
        exists = User.find_by(name: params[:name])
        if exists
            # render json: {error: "This user already exists.", user_id: exists.id, status: 400}
            render json: exists
        else
            user = User.create(user_params)
            if user.save
                render json: user
            else
                render json: {error: "There was an error creating that user.", status: 400}
            end
        end
    end

    def update
        user = User.find_by_id(params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: {error: "There was an error updating that user.", status: 400}
        end
    end

    # def destroy
    # end

    private

    def user_params
        params.require(:user).permit(:name)
    end

end

# fetch('http://localhost:3000/users', {
#     method: "POST",
#     headers: {"Accepts": "application/json", "Content-Type": "application/json"},
#     body: JSON.stringify({name: "Kirk"})
# })
# .then(res => res.json())
# .then(console.log)
