class RootController < ApplicationController
  def index
  end

  def verify
    render :json => {
                      result: Solution.verify_guess(params[:name], params[:xcoord].to_i, params[:ycoord].to_i)
                    }
  end
end
