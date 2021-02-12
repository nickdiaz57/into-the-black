class GameSerializer < ActiveModel::Serializer
    attributes :id, :completed, :won, :user_id
end