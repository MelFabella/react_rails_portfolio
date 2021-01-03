class Post < ApplicationRecord
  belongs_to :blog

  validates :title, :body, presence: true
end
